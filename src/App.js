import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import fetchImage from './Services/apiService';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Notify from './Components/Notify';
import Modal from './Components/Modal';
import Button from './Components/Button';
import s from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [targetImage, setTargetImage] = useState(null);

  useEffect(() => {
    setPage(1);
    searchImages(searchQuery, 1);
  }, [searchQuery]);

  function searchImages(searchQuery, page) {
    if (searchQuery === '') {
      setImages([]);
      setShowButton(false);
      setMessage('Please input search request');
      setNotify(true);
      return;
    }

    setIsLoading(true);
    setNotify(false);

    fetchImage(searchQuery, page)
      .then(data => {
        if (page === 1) {
          setImages(data.hits);
        } else {
          setImages(prevState => [...prevState, ...data.hits]);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }

        checkButtonAndNotify(data.totalHits, images.length + data.hits.length);
        setPage(prevState => prevState + 1);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }

  function checkButtonAndNotify(total, current) {
    if (total > current) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    if (!total) {
      setMessage('Nothing was found. Try again.');
      setNotify(true);
    } else {
      setNotify(false);
    }
  }

  const toggleModal = ({ status, src, alt }) => {
    if (status) {
      setTargetImage({ src, alt });
      setShowPopup(true);
    } else {
      setShowPopup(false);
      setTargetImage(null);
    }
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={setSearchQuery} />
      {error && <Notify message={`Something wrong: ${error.message}`} />}
      {isLoading && (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
      {images.length > 0 && (
        <ImageGallery images={images} toggleModal={toggleModal} />
      )}
      {notify && <Notify message={message} />}
      {showPopup && (
        <Modal
          src={targetImage.src}
          alt={targetImage.alt}
          toggleModal={toggleModal}
        />
      )}
      {showButton && <Button onClick={() => searchImages(searchQuery, page)} />}
    </div>
  );
};

export default App;
