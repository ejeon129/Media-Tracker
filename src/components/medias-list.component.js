import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Media = props => (
  <tr>
    <td>{props.media.username}</td>
    <td>{props.media.description}</td>
    <td>{props.media.attraction}</td>
    <td>{props.media.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.media._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMedia(props.media._id) }}>delete</a>
    </td>
  </tr>
)

export default class MediasList extends Component {
  constructor(props) {
    super(props);

    this.deleteMedia = this.deleteMedia.bind(this)

    this.state = {medias: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/medias/')
      .then(response => {
        this.setState({ medias: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMedia(id) {
    axios.delete('http://localhost:5000/medias/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      medias: this.state.medias.filter(el => el._id !== id)
    })
  }

  mediaList() {
    return this.state.medias.map(currentmedia => {
      return <Media media={currentmedia} deleteMedia={this.deleteMedia} key={currentmedia._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Media</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Points</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.mediaList() }
          </tbody>
        </table>
      </div>
    )
  }
}