<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - iPixel Electronics Bangalore</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
            border: 1px solid #e2e8f0;
          }
          h1 {
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 12px 0;
            color: #0f172a;
            letter-spacing: -0.025em;
          }
          .description {
            font-size: 15px;
            line-height: 1.6;
            color: #64748b;
            margin-bottom: 32px;
          }
          .alert {
            background-color: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 16px 20px;
            border-radius: 0 12px 12px 0;
            margin-bottom: 32px;
            font-size: 14px;
            color: #1e3a8a;
            line-height: 1.5;
          }
          .alert-bold {
            font-weight: 600;
            color: #1d4ed8;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            margin-top: 10px;
          }
          th {
            background-color: #f1f5f9;
            color: #475569;
            padding: 14px 16px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 2px solid #e2e8f0;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          td {
            padding: 16px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 14px;
            color: #334155;
            word-break: break-all;
          }
          .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
          }
          .badge-priority {
            background-color: #f0fdf4;
            color: #166534;
            border: 1px solid #bbf7d0;
          }
          .badge-freq {
            background-color: #faf5ff;
            color: #6b21a8;
            border: 1px solid #e9d5ff;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 13px;
            color: #94a3b8;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>iPixel Electronics — XML Sitemap</h1>
          <p class="description">
            This is an XML Sitemap generated automatically to help search engines like Google, Bing, and Yahoo crawl and index the pages on <strong>iPixel Electronics Bangalore</strong> more efficiently.
          </p>

          <div class="alert">
            <span class="alert-bold">Note for Visitors:</span> This page contains style information for display purposes. The actual XML file format is optimized for web crawlers and meets all system requirements for the Google Search Console.
          </div>

          <table>
            <thead>
              <tr>
                <th width="50%">URL Address</th>
                <th width="15%">Change Frequency</th>
                <th width="15%">Priority</th>
                <th width="20%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge badge-freq">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                  <td>
                    <span class="badge badge-priority">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <div class="footer">
            Powered by iPixel Electronics Bangalore TV Repair Service &#169; 2026. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
