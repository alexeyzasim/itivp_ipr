import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';

const placeholderImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'>
  <rect width='500' height='300' fill='%23f5f5f5'/>
  <text x='250' y='150' font-family='Arial' font-size='16' text-anchor='middle' fill='%23666'>Изображение загружается</text>
</svg>`;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [loadedPages, setLoadedPages] = useState(0);
  const [showCollapse, setShowCollapse] = useState(false);
  const maxLoads = 4;

  const fetchImages = async (currentPage) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=20`);
      
      if (!response.ok) {
        throw new Error('Не удалось загрузить изображения');
      }
      
      const data = await response.json();
      const newImages = data.map(photo => ({
        id: photo.id,
        url: `https://picsum.photos/id/${photo.id}/500/300`,
        download_url: photo.download_url,
        author: photo.author
      }));
      
      setImages(prevImages => {
        const existingIds = new Set(prevImages.map(img => img.id));
        const uniqueNewImages = newImages.filter(img => !existingIds.has(img.id));
        return [...prevImages, ...uniqueNewImages];
      });

      setHasMore(loadedPages < maxLoads - 1);
      setLoadedPages(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
      setShowCollapse(true); // Показываем кнопку "Свернуть" после первого нажатия
    }
  };

  const resetGallery = () => {
    setImages(images.slice(0, 20)); // Оставляем только первые 20 фото
    setPage(1);
    setLoadedPages(0);
    setHasMore(true);
    setShowCollapse(false); // Скрываем кнопку "Свернуть"
  };

  return (
    <div className={styles.galleryContainer}>
      <h2>Галерея фотографий наших клиентов</h2>
      
      {error && (
        <div className={styles.errorMessage}>
          {error}
          <button onClick={() => fetchImages(page)} className={styles.retryButton}>
            Попробовать снова
          </button>
        </div>
      )}
      
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={`${img.id}-${index}`} className={styles.imageCard}>
            <img
              src={img.url}
              alt={`Фотография от ${img.author}`}
              loading={index < 12 ? "eager" : "lazy"}
              className={styles.galleryImage}
              onError={(e) => {
                e.target.src = img.download_url || placeholderImage;
              }}
            />
            <div className={styles.info}>
              <p className={styles.author}>Автор: {img.author}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.controls}>
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Загружаем фотографии...</p>
          </div>
        ) : hasMore ? (
          <div className={styles.buttonGroup}>
            <button onClick={loadMore} className={styles.loadMoreButton}>
              Показать еще
            </button>
            {showCollapse && (
              <button onClick={resetGallery} className={styles.collapseButton}>
                Свернуть
              </button>
            )}
          </div>
        ) : (
          <div className={styles.endSection}>
            <p className={styles.endMessage}>Вы просмотрели все фотографии!</p>
            <button onClick={resetGallery} className={styles.collapseButton}>
              Свернуть галерею
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;