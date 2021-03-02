import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import noImage from '../../../images/download.png';

const DisplayCompleteCredits = ({ type, list }) => {
  return (
    <div>
      <div
        className="d-flex flex-row flex-wrap"
        style={{
          height: '79vh',
          overflowY: 'auto',
        }}
      >
        {list.map((person) => {
          return (
            <Card
              key={`person_{${type}_${person.id}`}
              className="col-6 col-md-3 d-flex flex-row mb-1 px-0 m-0"
            >
              <Link
                to={`/person/${person.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
                className="col-3 col-md-3 px-0"
              >
                <Card.Img
                  src={
                    person.profile_path !== null
                      ? `https://image.tmdb.org/t/p/h632${person.profile_path}`
                      : noImage
                  }
                  style={{ height: '100%' }}
                />
              </Link>
              <Card.Body className="p-0 pl-2">
                <Link
                  to={`/person/${person.id}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                  className="pt-1 mb-0"
                >
                  <Card.Text>{person.name}</Card.Text>
                </Link>
                <Card.Text
                  className="text-muted d-flex flex-column"
                  style={{ fontSize: '0.8em' }}
                >
                  <span>{type === 'cast' ? person.character : person.job}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayCompleteCredits;
