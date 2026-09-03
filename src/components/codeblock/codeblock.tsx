import { useState } from "react";

type CodeBlockProps = {
  readonly code: string;
  readonly language?: string;
}

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

  return (
    <div>
        
    </div>
  );
}