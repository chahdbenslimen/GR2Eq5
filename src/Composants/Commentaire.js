import React from "react";

class Commentaire extends React.Component {
render() {
return ( <div> <textarea
       className="form-control"
       placeholder="Tapez un commentaire..."
     ></textarea>

    <small>120 Restants</small>

    <div className="mt-2">
      <button
        type="button"
        className="btn btn-primary"
      >
        Commenter
      </button>
    </div>
  </div>
);

}
}

export default Commentaire;