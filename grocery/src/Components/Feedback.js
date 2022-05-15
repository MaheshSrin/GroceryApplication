import React, { useState } from 'react';

const Feedback = () => {
  const [star, setStar] = useState('0');

  const handleStar = (e) => {
    setStar(4);   
  };

  return (
    <div class="container mt-4 mb-4">
      <form>
        <div class="mb-3 row">
          <label for="inputName" class="col-sm-4 col-form-label">
            Name
          </label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputName" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputEmail" class="col-sm-4 col-form-label">
            Email
          </label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="inputEmail" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputEmail" class="col-sm-4 col-form-label">
            Feedback
          </label>
          <div class="col-sm-8">
            <textarea type="text" class="form-control" id="inputFeedback" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputEmail" class="col-sm-4 col-form-label">
            Rating
          </label>
          <div class="col-sm-8 d-flex">
            {[...Array(5)].map((indexStar, index) => {
              index += 1;
              return (
                <i className={index <= star ? "fa fa-solid fa-star" : "fa fa-star-o"} key={index}
                  onClick={() => {setStar(index);}}></i>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
