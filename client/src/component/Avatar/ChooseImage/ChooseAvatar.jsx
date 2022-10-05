import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import './ChooseAvatar.css'

export default function ChooseAvatar({picture, setPicture}){
    let editor = '';

    //HandleSlider hace el ajuste del ancho y alto de la imagen seleccionada para el Avatar antes de guardarla
    const handleSlider = (e) => {
        setPicture({
            ...picture,
            zoom: e.target.value
        });
    };

    //HandleCancel cierra el preview de la selección de la imagen sin guardar
    const handleCancel = () => {
        setPicture({
            ...picture,
            cropperOpen: false
        });
    };

    //Contenedor donde toma y se visualiza la imagen ingresada a ajustar
    const setEditorRef = (ed) => {
        editor = ed;
    };

    //HandleSave guarda la imagen que se acepta guardar para el avatar
    const handleSave = (e) => {
        if (setEditorRef) {
        const canvasScaled = editor.getImageScaledToCanvas();
        const croppedImg = canvasScaled.toDataURL();

        setPicture({
            ...picture,
            img: null,
            cropperOpen: false,
            croppedImg: croppedImg
        });
        }
    };

    return (
        <section>
            {picture.cropperOpen && (
                <section  className='choose-avatar-container'>
                    <AvatarEditor ref={setEditorRef} image={picture.img} width={150} height={80} border={50}  borderRadius={10} color={[255, 255, 255, 0.6]} rotate={0} scale={picture.zoom}/>

                    <section className='choose-avatar-slider'>
                        <input type='range' value={picture.zoom} min='1' max='10' step='0.1' onChange={handleSlider} />
                        
                        <section className='choose-avatar-slider-b'>
                            <button onClick={handleCancel} className='choose-avatar-slider-b-c'>Cancelar</button>
                            <button onClick={handleSave} className='choose-avatar-slider-b-s'>Aceptar</button>
                        </section> 
                    </section> 
                </section>
            )}
        </section>
    );
}