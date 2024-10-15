import { useState } from "react";
import { MessageCircleMore, Info, Heart } from "lucide-react";

function Brg({ foto, nama, deskripsi, stok,harga,kategori, onAddToCart }) { // Tambahkan onAddToCart di sini
    const [showPopup, setShowPopup] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState('');

    const handleInfoClick = () => {
        setShowPopup(!showPopup);
    };

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const handleCommentClick = () => {
        const userComment = prompt("Please enter your comment:");
        if (userComment !== null && userComment.trim() !== "") {
            setComment(userComment);
            alert(`Your comment: ${userComment}`);
        }
    };

    return (
        <div className="kotak">
            <img src={foto} alt={nama} className="foto" />
            <h1>{nama}</h1>
            <p>{deskripsi}</p>
            <h4>Tersedia : {stok}</h4>
            <h3>Kategori : {kategori}</h3>
            <div className="icon">
               
                <Info size={30} className="info" onClick={handleInfoClick} />
                <Heart 
                    size={30} 
                    className="love" 
                    onClick={handleLikeClick} 
                    stroke="black" 
                    fill={isLiked ? "red" : "white"} 
                    style={{ cursor: 'pointer' }}
                />
                <MessageCircleMore 
                    size={30} 
                    className="coment" 
                    onClick={handleCommentClick} 
                    style={{ cursor: 'pointer' }}
                />
                <div className="kotakbuy" onClick={onAddToCart} style={{ cursor: 'pointer' }}>
                    <h2>Buy</h2>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    <img src={foto} alt={nama} className="popup-foto" />
                    <p> {nama}</p>
                    <p> Rp.{harga}</p>
                </div>
            )}
        </div>
    );
}

export default Brg;
