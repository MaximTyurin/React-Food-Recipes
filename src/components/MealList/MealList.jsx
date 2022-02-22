import './MealList.css';

import Meal from '../Meal/Meal';

function MealList({ meals }) {
    return (
        <div className='list'>
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}
export default MealList;
