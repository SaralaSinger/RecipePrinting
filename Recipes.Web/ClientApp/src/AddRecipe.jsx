import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddRecipe = () => {

    const [title, setTitle] = useState('');
    const [directions, setDirections] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [source, setSource] = useState('');
    const [notes, setNotes] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    const isFormValid = !!title && !!category

    useEffect(() => {
        const getCategories = async () => {
            const { data } = await axios.get('/api/recipe/getcategories')
            setCategories(data)
        }
        getCategories()
    }, [])

    const onSubmitClick = async () => {
        setIsSubmitting(true);
        await axios.post('/api/recipe/addrecipe', {
            title,
            directions,
            prepTime,
            ingredients,
            source,
            notes,
            category,
        });
        setIsSubmitting(false);
        navigate('/success');
    }

    const onCategoryChange = e => {
        setCategory(e.target.value);
    }
    const onIngredientChange = (index, key, value) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index][key] = value;
        setIngredients(updatedIngredients);
    };
    const onAddIngredientClick = () => {
        setIngredients([...ingredients, { name: '', measurement: '' }]);
    };

    return (
        <>
            <h1 className="text-center my-4">Add Recipe</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Source</label>
                        <input type="email" value={source} onChange={e => setSource(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select onChange={onCategoryChange} value={category} className="form-select">
                            <option value="">Please Select</option>
                            {categories.map((c) => <option key={c}>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="mb-3">
                                <label htmlFor={`ingredient-${index}`} className="form-label">
                                    Ingredient ({index + 1})
                                </label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id={`measurement-${index}`}
                                        value={ingredient.measurement}
                                        placeholder="Measurement"
                                        onChange={(e) => onIngredientChange(index, 'measurement', e.target.value)}
                                        className="form-control"
                                    />
                                    <input
                                        type="text"
                                        id={`ingredient-${index}`}
                                        value={ingredient.name}
                                        placeholder="Ingredient"
                                        onChange={(e) => onIngredientChange(index, 'name', e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        ))} <button className="btn btn-warning" onClick={onAddIngredientClick}>Add Ingredient</button>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Directions</label>
                        <textarea onChange={e => setDirections(e.target.value)} value={directions} className="form-control" rows={3} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Notes</label>
                        <textarea value={notes} onChange={e => setNotes(e.target.value)} className="form-control" rows={3} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Prep Time</label>
                        <input value={prepTime} onChange={e => setPrepTime(e.target.value)} className="form-control" />
                    </div>
                    <button type="submit" onClick={onSubmitClick} disabled={!isFormValid || isSubmitting} className="btn btn-primary">
                        {isSubmitting ? 'Submitting...' : 'Add Recipe'}
                    </button>
                </div>
            </div>
        </>

    )
}
export default AddRecipe