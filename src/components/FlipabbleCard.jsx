const FlippableCard = ({ title, content, salary, jobType }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="front">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Card.Text>Salary: {salary}</Card.Text>
          <Card.Text>Job Type: {jobType}</Card.Text>
          <Button variant="contained" color="primary">
            Apply
          </Button>{" "}
          <Button variant="contained" color="primary">
            Requirements
          </Button>
        </Card.Body>
      </div>
      <div className="back">
        <Card.Body>
          <Card.Text>Requirements:</Card.Text>
          <ul>
            <li>Requirement 1</li>
            <li>Requirement 2</li>
            {/* Add more requirements as needed */}
          </ul>
        </Card.Body>
      </div>
    </div>
  );
};
