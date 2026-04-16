const { PDFParse } = require("pdf-parse");

/**
 * Parses text out of an uploaded PDF file buffer
 * @param {Object} file - multer file object
 * @returns {Promise<String>} - plain extracted text
 */
const parsePDF = async (file) => {
  if (!file || !file.buffer || file.buffer.length === 0) {
    throw new Error("No PDF data to parse");
  }

  let parser;
  try {
    parser = new PDFParse({ data: file.buffer }); // pass buffer via data key
    const result = await parser.getText();
    return result.text;
  } catch (err) {
    console.error("PDF parse error:", err);
    throw new Error(`Failed to parse PDF: ${err.message}`);
  } finally {
    if (parser) await parser.destroy(); // always clean up
  }
};

module.exports = { parsePDF };