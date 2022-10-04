import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";
import { useTutorialsContext } from "../hooks/useTutorialsContext";

const AddTutorial = () => {

  const { dispatch } = useTutorialsContext()

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [tutorialInitial, setTutorialInitial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorialInitial({ ...tutorialInitial, [name]: value });
  };

  const saveTutorial = () => {
    debugger
    var data = {
      title: tutorialInitial.title,
      description: tutorialInitial.description
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorialInitial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
        debugger
        dispatch({type: 'CREATE_TUTORIAL', payload: response.data})
        

      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorialInitial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorialInitial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorialInitial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
