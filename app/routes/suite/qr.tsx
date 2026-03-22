import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { debounce } from "~/utils";

const Qr = () => {
  const [content, setContent] = useState<string | undefined>();
  const [code, setCode] = useState<string | undefined>();
  const [darkMode, setDarkMode] = useState(false);

  const handleContentUpdate = async () => {
    if (!content || content.trim().length < 1) {
      setCode((prev) => undefined);
      return;
    }

    const code = await QRCode.toDataURL(content.trim(), {
      version: 5,
      errorCorrectionLevel: "M",
      type: "image/jpeg",
      color: {
        dark: darkMode ? "#fff" : "#000",
        light: darkMode ? "#000" : "#fff",
      },
    });
    setCode(() => code);
  };

  const saveCode = () => {
    if (!code) return;
    const a = document.createElement("a");
    a.href = code;
    a.download = "QRCODE.jpg";

    a.click();
    a.remove();
  };

  const contentUpdated = debounce(handleContentUpdate, 1000);

  useEffect(() => {
    contentUpdated();
  }, [content, darkMode]);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-x-4">
        <div>
          <form>
            <div className="form-group">
              <label>Content</label>
              <textarea
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className="form-control resize-y"
                rows={5}
                placeholder="Enter your content here"
              ></textarea>
            </div>
          </form>

          <button
            onClick={() => {
              setDarkMode((prev) => !prev);
            }}
            className="px-3 py-1 rounded bg-blue-500 text0white"
          >
            Dark Mode
          </button>
        </div>

        {/* Preview */}
        <div className="rounded bg-gray-800 p-8 md:w-1/2 m-auto">
          {code ? (
            <img src={code} className="w-full rounded-lg" />
          ) : (
            <>
              <BsQrCode className="w-full text-[120px]" />
            </>
          )}

          {code ? (
            <div className="text-center pt-4">
              <button
                onClick={saveCode}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Qr;
