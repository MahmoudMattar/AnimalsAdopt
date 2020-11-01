import React from "react";
import Pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

/*const Details = (props) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};
*/

class Details extends React.Component {
  /*
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  */

  state = { loading: true };
  componentDidMount() {
    Pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city},${animal.contact.address.country}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
      //eslint-disable-next-line
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <div className="loader"></div>;
    }
    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location} `}</h2>
          <button> Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
