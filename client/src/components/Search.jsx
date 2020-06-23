import React from "react";

export default function Search() {
  return (
    <>
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Book Search</label>
            <input type="text" class="form-control" />
            <small id="emailHelp" class="form-text text-muted">
              Search any book in the Google Book database.
            </small>
          </div>

          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      <div class="media">
        <img src="..." class="align-self-center mr-3" alt="..." />
        <div class="media-body">
          <h5 class="mt-0">Center-aligned media</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p class="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </>
  );
}
