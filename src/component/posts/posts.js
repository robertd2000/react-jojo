import React, { useCallback, useEffect, useState } from 'react'
import './posts.css'

const Item = ({posts}) => {
    const items = posts.map((item, i) => (
        <div key={i} className='posts_item'>
            <div className='posts_inner'>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </div>
            
        </div>
    ))

    return (
        <div className={'posts'}>
            {items}
        </div>
    )
}

const Posts = () => {
    const [posts, setPosts] = useState(
        [
            {title: 'Сильнейший станд', content: 'По моему мнению, это Стар Платинум, он быстрый, сильный и останавливает время!'},
            {title: 'Сильнейший станд', content: 'По моему мнению, это Стар Платинум, он быстрый, сильный и останавливает время!'},
            {title: 'Сильнейший станд', content: 'По моему мнению, это Стар Платинум, он быстрый, сильный и останавливает время!'}
    ]
    
    )
    console.log(localStorage.getItem('value'));

    const [title, setTitle] = useState('')
    console.log(title);
    const [content, setContent] = useState('')
    console.log(content);

    const updateTitle = (e) => {
        return setTitle(e.target.value)
    }

    const updateContent = (e) => {
        return setContent(e.target.value)
    }

    // useEffect(() => {
    //     setPosts((prev) => {
    //        title = [...prev, {title, content}]
    //     })
    // }, [posts])
    const submitData = (e) => {
        e.preventDefault()
        setPosts([...posts, {title, content}])
        const a = [...posts, {title, content}]
        localStorage.setItem('value', a)
    }
    

    return (
        <div className="">
            <div className="container">
                <Item posts={posts}/>
                <form className='form' onSubmit={submitData}>
                    <label>
                        
                        Заголовок:
                        <input type="text" className='form-input' onChange={updateTitle} />
                         Текст:
                         <textarea type="text" className='form-input form-input-area' onChange={updateContent} />

                    </label>
                    <input className='submit' type="submit" value="Отправить" />
                </form>
            </div>
        </div>
    )
}

export default Posts