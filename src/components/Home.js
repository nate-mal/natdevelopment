const Home = () => {
  const arr = [
    1, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5,
    2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2,
    3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3,
    3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3,
    4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4,
    4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4,
    5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5,
    5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5, 5, 2, 3, 3, 4, 4, 5, 5,
    5,
  ];
  return (
    <div>
      {arr.map((value, index) => (
        <h3 key={index}>{index} Home Page</h3>
      ))}
    </div>
  );
};

export default Home;