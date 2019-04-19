export 
const randomNumber = ({max, min}) => 
    Math.abs(
        Math.round(
            Math.random() * (max - min) + min
        )
    );
    