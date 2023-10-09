import '../../css/TatooProduct/Tatoo.css'

function Tatoo(props) {
    return (
        <div className='tatoo'>
            <h2>{props.title}</h2>
            <h2>От {props.price} ₽</h2>
        </div>
    );
}
export default Tatoo;