import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div class="card mt-3">
      <div class="card-body">
        <h3 class="card-title">Filter</h3>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div>
          <h5 class="card-title mt-4">Categories :</h5>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="FandV" />
            <label class="form-check-label" for="FandV">
              Fruits & Vegitables
            </label>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="ST" />
            <label class="form-check-label" for="ST">
              Staples
            </label>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="DandB" />
            <label class="form-check-label" for="DandB">
              Drinks & Bevereges
            </label>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="DP" />
            <label class="form-check-label" for="DP">
              Dairy Products
            </label>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="PF" />
            <label class="form-check-label" for="PF">
              Pet Foods
            </label>
          </div>
        </div>
        <div>
          <h5 class="card-title mt-4">Price :</h5>
          <div className="PriceRange">
          <div class="mb-3">
            <label for="From" class="form-label">
              From
            </label>
            <input type="number" class="form-control" id="PriceFrom" />
          </div> 
          <div class="p-2 mt-2">
              <b>-</b>
          </div>
          <div class="mb-3">
            <label for="To" class="form-label">
              To
            </label>
            <input type="number" class="form-control" id="PriceTo" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
