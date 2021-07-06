import React, { useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom';


const Wheel = props => {
    // const { to, staticContext, ...rest } = props;

    const canvasRef = useRef(null)

    // const draw = (ctx, frameCount) => {
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     ctx.fillStyle = '#000000'
    //     ctx.beginPath()
    //     ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    //     ctx.fill()
    // }

    var options = ["Chinese", "Japanese","Vietnamese", "Indian", "Korean", "Mexican", "Italian", "American", "Vegan", "Mediterranean", "Thai", "Vegetarian", "French", "Irish", "Filipino"];
    // var options = ["Vietnamese"];
    var startAngle = 0;
    var arc = Math.PI / (options.length / 2);
    var spinTimeout = null;


    // let spinArcStart = 10;
    let spinTime = 0;
    let spinTimeTotal = 0;

    let ctx;

    //document.getElementById("spin").addEventListener("click", spin);

    function byte2Hex(n) {
        let nybHexString = "0123456789ABCDEF";
        return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
    }

    function RGB2Color(r, g, b) {
        return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
    }

    function getColor(item, maxitem) {
        let phase = 0;
        let center = 128;
        let width = 127;
        let frequency = Math.PI * 2 / maxitem;

        let red = Math.sin(frequency * item + 2 + phase) * width + center;
        let green = Math.sin(frequency * item + 0 + phase) * width + center;
        let blue = Math.sin(frequency * item + 4 + phase) * width + center;

        return RGB2Color(red, green, blue);
    }

    let spinAngleStart;

    function spin() {
        spinAngleStart = Math.random() * 10 + 10;
        spinTime = 0;
        spinTimeTotal = Math.random() * 3 + 4 * 1000;
        rotateWheel();
    }

    function rotateWheel() {
        // let canvas = canvasRef.current
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
            stopRotateWheel();
            return;
        }
        let spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
        startAngle += (spinAngle * Math.PI / 180);
        //drawRouletteWheel(canvas);
        // let rotateWheel = rotateWheel.bindt(this);
        spinTimeout = setTimeout(rotateWheel, 30);
    }

    function stopRotateWheel() {
        //let canvas = canvasRef.current;
        // let ctx = canvas.getContext("2d");
        clearTimeout(spinTimeout);
        let degrees = startAngle * 180 / Math.PI + 90;
        let arcd = arc * 180 / Math.PI;
        let index = Math.floor((360 - degrees % 360) / arcd);
        ctx.save();
        ctx.font = 'bold 30px Arial, serif';
        let text = options[index];
        props.receiveCuisine(text);
        console.log(text);
        ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
        ctx.restore();
        props.history.push("/restaurants/");
    }

    function easeOut(t, b, c, d) {
        let ts = (t /= d) * t;
        let tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    }

    function drawRouletteWheel(canvas) {
        if (canvas.getContext) {
            let outsideRadius = 200;
            let textRadius = 160;
            let insideRadius = 125;

            ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 500, 500);

            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.font = 'bold 12px Arial, serif';

            for (let i = 0; i < options.length; i++) {
                let angle = startAngle + i * arc;
                //ctx.fillStyle = colors[i];
                ctx.fillStyle = getColor(i, options.length);

                ctx.beginPath();
                ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
                ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
                ctx.stroke();
                ctx.fill();

                ctx.save();
                // ctx.shadowOffsetX = -1;
                // ctx.shadowOffsetY = -2;
                ctx.shadowBlur = 0;
                ctx.shadowColor = "rgb(0, 0, 0)";
                ctx.strokeStyle = "rgb(0, 0, 0)"
                ctx.fillStyle = "white";
                ctx.lineWidth = 2;
                ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                    250 + Math.sin(angle + arc / 2) * textRadius);
                ctx.rotate(angle + arc / 2 + Math.PI / 2);
                let text = options[i];
                ctx.strokeText(text, -ctx.measureText(text).width / 2, 0);
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
                ctx.restore();
            }

            //Arrow
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
            ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
            ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
            ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
            ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
            ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
            ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
            ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
            ctx.fill();

            let degrees = startAngle * 180 / Math.PI + 90;
            let arcd = arc * 180 / Math.PI;
            let index = Math.floor((360 - degrees % 360) / arcd);
            ctx.save();
            // font - family: ;
            ctx.font = 'bold 30px Arial, serif';
            let text = options[index];
            ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
            ctx.restore();
        }
    }

    useEffect(() => {

        const canvas = canvasRef.current
        // const context = canvas.getContext('2d')
        let animationFrameId

        //Our draw came here
        const render = () => {
            drawRouletteWheel(canvas)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [drawRouletteWheel])

    //console.log(props.active())

    return (
        <div className={`modal${props.modalactive ? " active" : ""}`}>
            <div className="modal-screen" onClick={props.modalSwitch}></div>
            <div className="wheel-container">
                <canvas ref={canvasRef} {...props} width="500" height="500" />
                <input onClick={spin} type="button" value="You Choose" id='spin' />
                <strong className="close-modal" onClick={props.modalSwitch}>❌</strong>
            </div>
        </div>
    )
}

export default Wheel;