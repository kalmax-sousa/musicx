import styled from 'styled-components';
import prev from '../../assets/img/prev.svg';
import next from '../../assets/img/next.svg';

export const Container = styled.ul`
    padding: 0;
    margin: 0;
    .slick-prev,
    .slick-next {
        background: #000000cc;
        border: 2px solid;
        border-radius: 4px;
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: 20px 0;
        width: 60px;
        height: 197px;
        transform: initial;
        opacity: 0;
        transition: opacity 0.3s;

        &:hover,
        &focus {
            opacity: 1;
        }

        @media (max-width: 800px){
            display: none;

            &:hover,
        &focus {
            opacity: 0;
        }
        }
    }

    .slick-prev {
        left: 16px;

        &:before {
            content: url(${prev});

        }
    }
    .slick-next {
        right: 0;

        &:before {
            content: url(${next});

        }
    }
`;

export const SliderItem = styled.li`
    margin-left: 16px;


    img {
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
`;