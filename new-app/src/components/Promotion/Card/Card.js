import React from 'react'
import "./CardCSS.css"

const PromotionCard = ({promotion}) => (
    <div className="promotion-card">
        <img 
        src={promotion.imageUrl} 
        alt={promotion.title} 
        className="promotion-card_image"
        />
        <div className="promotion-card_info">
            <h1 className="promotion-card_title">{promotion.title}</h1>
            <span className="promotion-card_price">R$ {promotion.price}</span>
            <footer className="promotion-card_footer">
                {promotion.comments.length > 0 && (
                    <div className="promotion-card_comment">"{promotion.comments[0].comment}"</div>
                )}
                
                <div className="promotion-card_comments-count">
                    {promotion.comments.length}{' '}
                    {promotion.comments.length > 1 ? 'Comentários':'Comentário'}
                </div>
                <a 
                href={promotion.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="promotion-card_link">IR PARA O SITE</a>
            </footer>
        </div>
    </div>
);

export default PromotionCard;