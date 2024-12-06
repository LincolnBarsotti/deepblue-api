<h1>DeepBlue API</h1>

<h2>Endpoints da API</h2>

<h3>Os Endpoints podem ser acessados e testados em: <code>http://localhost:3000/docs</code></h3>

<h2>Instruções de Execução</h2>

<h3>1. Clonar o Repositório</h3>
<pre><code>
git clone https://github.com/LincolnBarsotti/deepblue-api.git
cd deepblue-api
</code></pre>

<h3>2. Instalar Dependências</h3>
<pre><code>
npm install
</code></pre>

<h3>2.1 Necessário configurar o banco de dados MYSQL</h3>
<p>Crie um database com o nome de deepblue</p>

<h3>2.2 Configuração do .env</h3>
<p>Configure o .env com base na url abaixo, lembre-se de colocar o nome do seu usuario, sua senha e a porta a qual está seu banco de dados:</p>
<pre><code>
DATABASE_URL="mysql://{usuario}:{senha}@localhost:{PORT}/deepblue"
</code></pre>

<h3>2.3 Rode o comando abaixo no terminal para que o prisma se conecte com o banco de dados</h3>
<pre><code>
npx prisma db push
</code></pre>

<h3>3. Rodar a Aplicação</h3>
<pre><code>
npm run start
</code></pre>
<p>A API estará disponível em <code>http://localhost:3000</code>.</p>

<h3>4. Acessar a Documentação</h3>
<p>A documentação da API estará disponível no Swagger em:</p>
<pre><code>
http://localhost:3000/docs
</code></pre>

<hr>

<h2>Tecnologias</h2>
<ul>
    <li><strong>NestJS</strong>: Framework para construção de APIs escaláveis.</li>
    <li><strong>Prisma</strong>: ORM para acessar o banco de dados.</li>
    <li><strong>Swagger</strong>: Documentação da API.</li>
    <li><strong>TypeScript</strong>: Linguagem de programação.</li>
</ul>

<h2>Contribuindo</h2>
<p>Se desejar contribuir para o projeto, por favor siga as instruções abaixo:</p>
<ol>
    <li>Faça um fork deste repositório.</li>
    <li>Crie uma branch para suas alterações (<code>git checkout -b feature/minha-feature</code>).</li>
    <li>Realize suas alterações e faça um commit (<code>git commit -am 'Adiciona nova feature'</code>).</li>
    <li>Faça push para a branch (<code>git push origin feature/minha-feature</code>).</li>
    <li>Envie um pull request.</li>
</ol>

<hr>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a MIT License - veja o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.</p>