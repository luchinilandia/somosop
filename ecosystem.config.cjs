module.exports = {
  apps: [
    {
      name: "somosOP",
      script: "serve",           // <--- Aquí va 'serve', NO 'dist'
      args: "-s dist",           // <--- Argumentos para 'serve'
      interpreter: "bash"        // <--- Importante para tratar 'serve' como comando de shell
    }
  ]
};

