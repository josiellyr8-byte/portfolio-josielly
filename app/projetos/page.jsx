"use client";

import { useEffect, useState } from "react";

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/josiellyr8-byte/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container-projetos">
      <h1>Meus Projetos no GitHub</h1>

      {loading && <p>Carregando...</p>}

      <div className="grid-cards">
        {repos.map((repo) => (
          <div key={repo.id} className="card-repo">
            <h3>{repo.name}</h3>
            <p>{repo.description || "Sem descrição."}</p>
            <p>Linguagem: {repo.language || "—"}</p>
            <p>⭐ {repo.stargazers_count}</p>

            <a href={repo.html_url} target="_blank">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}