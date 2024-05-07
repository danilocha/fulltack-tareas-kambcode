import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './contacto.module.css';



const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    emailjs.sendForm('service_y0u4gja', 'template_93dlf8s', e.target, 'jDFZ0YhF28kw3cjqT')
      .then((result) => {
        console.log(result.text);
        setMessage("Gracias por contactarte conmigo, tu mensaje ha sido recibido.");
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setMessage("Lo siento, ha ocurrido un error.");
      });
  };

  return (
    <form className={styles.div} onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
      <div className={styles.container}>
        <div className={styles.cajas}>
            <label htmlFor="name">Nombre:</label>
            <input className={styles.inputfield} type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
         </div>
        <div className={styles.cajas}>
            <label htmlFor="email">email:</label>
            <br></br>
            <input className={styles.inputfield} type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.cajas}>
            <label htmlFor="message">Mensaje:</label>
            <textarea className={styles.textareafield} id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button className={styles.button} type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Contacto;
