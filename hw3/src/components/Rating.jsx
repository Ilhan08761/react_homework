import { useState } from "react";
import "./Rating.css";

const ratingList = [
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIzMiIgZm9udC1zaXplPSIzMiIgZmlsbD0iI2Y1OWUwYiI+4piF4piF4piF4piF4piFPC90ZXh0Pjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIzMiIgZm9udC1zaXplPSIzMiIgZmlsbD0iI2Y1OWUwYiI+4piF4piF4piF4piFPHRzcGFuIGZpbGw9IiNkMWQ1ZGIiPuKYhTwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIzMiIgZm9udC1zaXplPSIzMiIgZmlsbD0iI2Y1OWUwYiI+4piF4piF4piFPHRzcGFuIGZpbGw9IiNkMWQ1ZGIiPuKYheKYhTwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIzMiIgZm9udC1zaXplPSIzMiIgZmlsbD0iI2Y1OWUwYiI+4piF4piFPHRzcGFuIGZpbGw9IiNkMWQ1ZGIiPuKYheKYheKYhTwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIzMiIgZm9udC1zaXplPSIzMiIgZmlsbD0iI2Y1OWUwYiI+4piFPHRzcGFuIGZpbGw9IiNkMWQ1ZGIiPuKYheKYheKYheKYhTwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg==",
];
function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating-container">
      <h2>Оцените наш сервис</h2>
      <img
        src={ratingList[ratingValue]}
        alt="Рейтинг"
        className="rating-image"
      />
      <div className="rating-buttons">
        <button onClick={() => setRatingValue(4)}>Плохо</button>
        <button onClick={() => setRatingValue(3)}>Приемлемо</button>
        <button onClick={() => setRatingValue(2)}>Хорошо</button>
        <button onClick={() => setRatingValue(1)}>Очень хорошо</button>
        <button onClick={() => setRatingValue(0)}>Отлично</button>
      </div>
    </div>
  );
}

export default Rating;
