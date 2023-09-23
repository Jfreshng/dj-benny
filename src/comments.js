import { useState } from 'react';
import person1 from './resources/Ellipse 1.png';
import person2 from './resources/Ellipse 2.png';
import person3 from './resources/Ellipse 3.png';

const Comments = () => {

    // adding image url dynamically
    const [imagePath, setImagePath] = useState([
        {}
    ]);

    // pass comments dynamically
    const [comments, setComments] = useState([
        {author: 'Fredrick', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sagittis sit morbi fringilla urna, nec laoreet scelerisque.', img_url: person1, id: 1},
        {author: 'Hannah', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sagittis sit morbi fringilla urna, nec laoreet scelerisque.', img_url: person2, id: 2},
        {author: 'Jones', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sagittis sit morbi fringilla urna, nec laoreet scelerisque.', img_url: person3, id: 3}
    ]);

    return ( 

        // change from static to data from some source
        <div className="flex-col comments bg-[#ff5c58] py-12 px-20" id="testimonials">
            <div className="text-center flex flex-col justify-center">
                <h2 className="text-white text-4xl underline-centered font-semibold">Comments</h2>
            </div>

            <div className="my-4 sm:block mx-auto sm:my-20 lg:flex lg:mt-20 text-center text-white justify-center lg:space-x-20">
                {comments.map((comment)=> (
                    <div className="pb-8 py-6 sm:py-6 lg:py-0 flex flex-col items-center justify-center" key={comment.id}>
                    <img src={ comment.img_url } alt="Person 1" className="w-45 h-45 mb-10"/>
                    <p>“{ comment.comment }”</p>
                    <h3 className="text-2xl mt-2">{ comment.author }</h3>
                </div>
                ))}
            </div>
        </div>
     );
}
 
export default Comments;