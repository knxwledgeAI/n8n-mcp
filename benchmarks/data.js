window.BENCHMARK_DATA = {
  "lastUpdate": 1772240525881,
  "repoUrl": "https://github.com/knxwledgeAI/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87f26eef1847852b0f8907b11014001ef4074fd9",
          "message": "fix: comprehensive param type coercion for Claude Desktop/Claude.ai (#605) (#609)\n\nExpand coerceStringifiedJsonParams() to handle ALL type mismatches,\nnot just stringified objects/arrays. Testing showed 6/9 tools still\nfailing in Claude Desktop after v2.35.4.\n\n- Coerce string→number, string→boolean, number→string, boolean→string\n- Add safeguard for entire args object arriving as JSON string\n- Add [Diagnostic] section to error responses with received arg types\n- Bump to v2.35.5\n- 24 unit tests (9 new)\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-22T07:07:30+01:00",
          "tree_id": "a2b3f1b9d290f4a5565bc9bc3b5dfaace4551cfd",
          "url": "https://github.com/knxwledgeAI/n8n-mcp/commit/87f26eef1847852b0f8907b11014001ef4074fd9"
        },
        "date": 1772240525178,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}