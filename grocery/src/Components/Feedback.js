import React, { useState } from 'react';

const Feedback = () => {
  const [star, setStar] = useState('0');
  // const [starColour, setStarColour] = useState('grey')

  const handleStar = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(e.target)
    console.log(e.target.key)
    console.log(e.target.value)
    // setStar(...star)
    setStar(4);
    
  };

  return (
    <div class="container mt-4 mb-4">
      <form>
        <div class="mb-3 row">
          <label for="inputName" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputName" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="inputEmail" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputEmail" class="col-sm-2 col-form-label">
            Feedback
          </label>
          <div class="col-sm-8">
            <textarea type="text" class="form-control" id="inputFeedback" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputEmail" class="col-sm-2 col-form-label">
            Rating
          </label>
          <div class="col-sm-8 d-flex">
            {[...Array(5)].map((indexStar, index) => {
              index += 1;
              return (
                //     star === 1 ?
                //   <i class="fa fa-solid fa-star" value={index} onClick={handleStar}></i>
                //   :
                <i
                  className={
                    index <= star ? 'fa fa-solid fa-star' : 'fa fa-star-o'
                  }
                  value={index}
                  key={index}
                  onClick={handleStar}
                ></i>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
