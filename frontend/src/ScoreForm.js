function ScoreForm({ submitScore, handleChange, name, submitted }) {

  return (
    <form className="Game-Form" onSubmit={submitScore}>
      <div class="form-group">
        <input
          className="Game-Form-Input form-control"
          onChange={handleChange}
          value={name}
          minlength='3'
          maxlength='3'
          id="scoreInput"
          aria-describedby="enterName"
        />
      </div>
      {!submitted
        ? <button type="submit" className="btn btn-secondary">Submit Score</button>
        : <div class="alert alert-dismissible alert-success container">
          Score successfully submitted!
        </div>}
    </form>
  );
}

export default ScoreForm;