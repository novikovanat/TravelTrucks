export default function FiltersComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    form.reset();
  };
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="location" />

      <input type="checkbox" name="features" id="AC" value="AC" />
      <label htmlFor="AC">AC</label>
      <input type="checkbox" name="features" id="automatic" value="automatic" />
      <label htmlFor="automatic">automatic</label>
      <input type="checkbox" name="features" id="kitchen" value="kitchen" />
      <label htmlFor="kitchen">Kitchen</label>
      <input type="checkbox" name="features" id="TV" value="TV" />
      <label htmlFor="TV">TV</label>
      <input type="checkbox" name="features" id="Bathroom" value="bathroom" />
      <label htmlFor="Bathroom">Bathroom</label>

      <input type="radio" name="type" id="van" value="van" />
      <label htmlFor="van">Van</label>
      <input type="radio" name="type" id="fullyInt" value="fullyInt" />
      <label htmlFor="fullyInt">Fully Integrated</label>
      <input type="radio" name="type" id="alcove" value="alcove" />
      <label htmlFor="alcove">Alcove</label>

      <button type="submit" value="submit">
        Search
      </button>
    </form>
  );
}
