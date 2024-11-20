import React from "react";

export const CodemetaTable = ({ codemeta }) => {
  console.log(codemeta);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Version</th>
        </tr>
      </thead>
      <tbody>
        {codemeta.map((item) => (
          <tr key={item.name}>
            <td>
              {item.codeRepository ? (
                <a
                  href={item.codeRepository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </td>
            <td>{item.description}</td>
            <td>{item.version ? item.version : "No version specified"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
