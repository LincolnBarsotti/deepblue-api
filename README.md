<h1>DeepBlue API</h1>

<h2>Endpoints da API</h2>

<h3>Usuários</h3>

<h4>1. Cadastrar um novo usuário</h4>
<p><strong>Método</strong>: <code>POST</code></p>
<p><strong>Rota</strong>: <code>/register</code></p>
<h5>Body:</h5>
<pre><code>
{
    "name": "Nome do Usuário",
    "email": "email@dominio.com",
    "password": "senha_secreta"
}
</code></pre>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 201</strong>: Usuário registrado com sucesso.</li>
    <li><strong>Status 400</strong>: Erro ao registrar usuário.</li>
</ul>

<h4>2. Efetuar login de um usuário</h4>
<p><strong>Método</strong>: <code>POST</code></p>
<p><strong>Rota</strong>: <code>/login</code></p>
<h5>Body:</h5>
<pre><code>
{
    "email": "email@dominio.com",
    "password": "senha_secreta"
}
</code></pre>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 200</strong>: Login realizado com sucesso.</li>
    <li><strong>Status 401</strong>: Credenciais inválidas.</li>
</ul>

<h4>3. Buscar um usuário pelo ID</h4>
<p><strong>Método</strong>: <code>GET</code></p>
<p><strong>Rota</strong>: <code>/user/:id</code></p>
<h5>Parâmetros:</h5>
<ul>
    <li><strong>id</strong> (caminho) - ID do usuário.</li>
</ul>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 200</strong>: Usuário encontrado com sucesso.</li>
    <li><strong>Status 404</strong>: Usuário não encontrado.</li>
</ul>

<h4>4. Atualizar dados de um usuário</h4>
<p><strong>Método</strong>: <code>PUT</code></p>
<p><strong>Rota</strong>: <code>/user/:id</code></p>
<h5>Body:</h5>
<pre><code>
{
    "name": "Novo Nome",
    "email": "novoemail@dominio.com",
    "password": "nova_senha"
}
</code></pre>
<h5>Parâmetros:</h5>
<ul>
    <li><strong>id</strong> (caminho) - ID do usuário.</li>
</ul>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 200</strong>: Usuário atualizado com sucesso.</li>
    <li><strong>Status 404</strong>: Usuário não encontrado.</li>
</ul>

<h4>5. Remover um usuário pelo ID</h4>
<p><strong>Método</strong>: <code>DELETE</code></p>
<p><strong>Rota</strong>: <code>/user/:id</code></p>
<h5>Parâmetros:</h5>
<ul>
    <li><strong>id</strong> (caminho) - ID do usuário.</li>
</ul>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 200</strong>: Usuário deletado com sucesso.</li>
    <li><strong>Status 404</strong>: Usuário não encontrado.</li>
</ul>

<hr>

<h3>Incidentes</h3>

<h4>1. Cadastrar um novo incidente</h4>
<p><strong>Método</strong>: <code>POST</code></p>
<p><strong>Rota</strong>: <code>/incidentes</code></p>
<h5>Body:</h5>
<pre><code>
{
    "Numero": "1307/000022",
    "Empresa": "OGX PETRÓLEO E GÁS S.A.",
    "Data_de_criacao": "2013-07-09",
    "Autoridades_comunicadas": "Ministério da Previdência Social.",
    "Instalacao": "Ocean Quest",
    "Data_da_primeira_observacao": "2013-06-26",
    "Hora_da_primeira_observacao": "18:20",
    "Data_estimada_do_incidente": "2013-06-26",
    "Hora_do_incidente": "18:20",
    "Numero_de_feridos_graves": 1,
    "Numero_de_fatalidades": 0
}
</code></pre>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 201</strong>: Incidente registrado com sucesso.</li>
    <li><strong>Status 400</strong>: Erro ao registrar incidente.</li>
</ul>

<h4>2. Buscar um incidente pelo ID</h4>
<p><strong>Método</strong>: <code>GET</code></p>
<p><strong>Rota</strong>: <code>/incidentes/:id</code></p>
<h5>Parâmetros:</h5>
<ul>
    <li><strong>id</strong> (caminho) - ID do incidente.</li>
</ul>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 200</strong>: Incidente encontrado com sucesso.</li>
    <li><strong>Status 404</strong>: Incidente não encontrado.</li>
</ul>

<h4>3. Atualizar dados de um incidente</h4>
<p><strong>Método</strong>: <code>PUT</code></p>
<p><strong>Rota</strong>: <code>/incidentes/:id</code></p>
<h5>Body:</h5>
<pre><code>
{
    "Numero": "1307/000022",
    "Empresa": "OGX PETRÓLEO E GÁS S.A.",
    "Data_de_criacao": "2013-07-09",
    "Autoridades_comunicadas": "Ministério da Previdência Social.",
    "Instalacao": "Ocean Quest",
    "Data_da_primeira_observacao": "2013-06-26",
    "Hora_da_primeira_observacao": "18:20",
    "Data_estimada_do_incidente": "2013-06-26",
    "Hora_do_incidente": "18:20",
    "Numero_de_feridos_graves": 1,
    "Numero_de_fatalidades": 1
}
</code></pre>
<h5>Parâmetros:</h5>
<ul>
    <li><strong>id</strong> (caminho) - ID do incidente.</li>
</ul>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 200</strong>: Incidente atualizado com sucesso.</li>
    <li><strong>Status 404</strong>: Incidente não encontrado.</li>
</ul>

<h4>4. Remover um incidente pelo ID</h4>
<p><strong>Método</strong>: <code>DELETE</code></p>
<p><strong>Rota</strong>: <code>/incidentes/:id</code></p>
<h5>Parâmetros:</h5>
<ul>
    <li><strong>id</strong> (caminho) - ID do incidente.</li>
</ul>
<h5>Resposta:</h5>
<ul>
    <li><strong>Status 200</strong>: Incidente deletado com sucesso.</li>
    <li><strong>Status 404</strong>: Incidente não encontrado.</li>
</ul>

<hr>

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