/*eslint-disable react/prop-types*/
export default function Ingredients(props) {
    return (
        props.list.length > 0 &&
        <section>
            <h3>Ingredients on hand:</h3>
                
            <ul className="ingredient-list">
                {props.list}
            </ul>
            {
                props.list.length > 3 &&
                < div className="get-recipe-container">
                    <div ref={props.ref} className="recipe-inst">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}