import React from 'react'

const CategorySelect = ({ handleChange, value }) => {
    return (
        <div className='form-floating'>
            <select id='categoryId' name='categoryId' className='form-select' onChange={handleChange} value={value}>
                <option value={0} hidden>Seçiniz</option>
                <option value={1} >İçecek</option>
                <option value={2} >Yiyecek</option>
            </select>
            <label htmlFor="categoryId">Kategori</label>
        </div>
    )
}

export default CategorySelect