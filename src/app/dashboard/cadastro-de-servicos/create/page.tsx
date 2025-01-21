export default function CreateServicePage() {
  return (
    <div>
      <h1>Criar Novo Serviço</h1>
      <form>
        <div>
          <label htmlFor="serviceName">Nome do Serviço</label>
          <input type="text" id="serviceName" name="serviceName" required />
        </div>
        <div>
          <label htmlFor="serviceDescription">Descrição</label>
          <textarea
            id="serviceDescription"
            name="serviceDescription"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="servicePrice">Preço</label>
          <input type="number" id="servicePrice" name="servicePrice" required />
        </div>
        <button type="submit">Criar Serviço</button>
      </form>
    </div>
  );
}
