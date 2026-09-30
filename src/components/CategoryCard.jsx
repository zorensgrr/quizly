const CategoryCard = function (props) {
  return (
    <div className="category-card">
      <input type="radio" id={props.id} name="category" value={props.id} />
      <label htmlFor={props.id}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </label>
    </div>
  );
};

export default CategoryCard;
