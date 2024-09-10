const MyForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "32px" }}>Formulario Básico</h2>

        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MyForm;
