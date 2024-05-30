import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const findKeyDifferences = (obj1, obj2) => {
  const keys1 = new Set(Object.keys(obj1));
  const keys2 = new Set(Object.keys(obj2));

  const inFirstOnly = [...keys1].filter(key => !keys2.has(key));
  const inSecondOnly = [...keys2].filter(key => !keys1.has(key));

  return { inFirstOnly, inSecondOnly };
};

const KeyDifferences = ({ data1, data2 }) => {
  const differences = data1.map((item, index) => {
    const data2Item = data2[index] || {};
    return findKeyDifferences(item, data2Item);
  });

  return (
    <div className="mt-2 w-[800px] rounded-md bg-slate-950 p-4">
      {differences.map((diff, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-white">Item {idx + 1}</h3>
          <div className="text-white">
            <strong>In first set only:</strong>
            {diff.inFirstOnly.length > 0 ? (
              <SyntaxHighlighter language="json" style={githubGist}>
                {JSON.stringify(diff.inFirstOnly, null, 2)}
              </SyntaxHighlighter>
            ) : (
              <p>None</p>
            )}
          </div>
          <div className="text-white">
            <strong>In second set only:</strong>
            {diff.inSecondOnly.length > 0 ? (
              <SyntaxHighlighter language="json" style={githubGist}>
                {JSON.stringify(diff.inSecondOnly, null, 2)}
              </SyntaxHighlighter>
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyDifferences;
