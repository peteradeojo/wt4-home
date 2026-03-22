import toast from "react-hot-toast";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { debounce } from "~/utils";

const Qr = () => {
  const [content, setContent] = useState<string | undefined>();
  const [code, setCode] = useState<string | undefined>();
  const [lightColor, setLightColor] = useState("#ffffff");
  const [darkColor, setDarkColor] = useState("#000000");

  const handleContentUpdate = async () => {
    if (!content || content.trim().length < 1) {
      setCode((prev) => undefined);
      return;
    }

    const code = await QRCode.toDataURL(content.trim(), {
      version: 5,
      errorCorrectionLevel: "M",
      type: "image/png",
      color: {
        dark: darkColor, // darkMode ? "#fff" : "#000",
        light: lightColor, // darkMode ? "#000" : "#fff",
      },
    });
    setCode(() => code);
  };

  const copyCode = async () => {
    if (!code) return;

    try {
      const res = await fetch(code);
      const blob = await res.blob();
      const item = new ClipboardItem({
        [blob.type]: blob,
      });
      await navigator.clipboard.write([item]);
      console.log("Copied");
      toast.success("Copied!");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
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
  }, [content, lightColor, darkColor]);

  // useEffect(() => {
  //   handleContentUpdate();
  // }, [lightColor, darkColor])

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
        </div>

        {/* Preview */}
        <div className="rounded bg-gray-800 p-8 w-full md:w-1/2 m-auto">
          {code ? (
            <img onClick={copyCode} src={code} className="w-full rounded-lg" />
          ) : (
            <>
              <BsQrCode className="w-full text-[120px]" />
            </>
          )}

          {code ? (
            <div className="text-center pt-4 grid gap-4">
              <div>
                <input
                  type="color"
                  value={lightColor}
                  onChange={(e) => setLightColor(e.target.value)}
                />
                <input
                  type="color"
                  value={darkColor}
                  onChange={(e) => setDarkColor(e.target.value)}
                />
              </div>

              <button
                onClick={saveCode}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Save
              </button>
              <button
                onClick={copyCode}
                className="px-4 py-2 bg-white text-black rounded cursor-pointer"
              >
                Copy
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Qr;
