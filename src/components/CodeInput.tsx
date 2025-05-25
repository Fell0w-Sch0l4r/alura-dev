import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-clike";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-go";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(10).max(100),
});

function CodeInput() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  

  const [code, setCode] = useState('console.log("Hello World")');
  const [language, setLanguage] = useState("javascript");
  const [backgroundColor, setBackgroundColor] = useState("bg-sky-300");


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const program = {
      ...values,
      code,
      language,
      backgroundColor
    };
    console.log(program);
  }
  

  function highlightCode(language: string, code: string) {
    switch (language) {
      case "javascript":
        return highlight(code, languages.javascript, "javascript");
      case "python":
        return highlight(code, languages.python, "python");
      case "java":
        return highlight(code, languages.java, "java");
      case "c":
        return highlight(code, languages.c, "c");
      case "cpp":
        return highlight(code, languages.cpp, "cpp");
      case "csharp":
        return highlight(code, languages.csharp, "csharp");
      case "typescript":
        return highlight(code, languages.typescript, "typescript");
      case "bash":
        return highlight(code, languages.bash, "bash");
      case "ruby":
        return highlight(code, languages.ruby, "ruby");
      case "go":
        return highlight(code, languages.go, "go");
      default:
        return code;
    }
  }
  return (
    <>
      <div
        className={`${backgroundColor} rounded-xl h-fit flex items-center justify-center p-5 mb-10`}
      >
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => highlightCode(language, code)}
          padding={10}
          style={{
            fontFamily: "monospace",
            fontSize: 16,
            background: "black",
            color: "#fff",
            borderRadius: "12px",
            minHeight: "300px",
            height: "fit-content",
            width: "100%",
          }}
        />
      </div>

      <Select onValueChange={(value) => setLanguage(value)}>
        <SelectTrigger className="w-full bg-slate-700 border-none">
          <SelectValue placeholder="Language" className="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="c">C</SelectItem>
          <SelectItem value="cpp">C++</SelectItem>
          <SelectItem value="csharp">C#</SelectItem>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="bash">Bash</SelectItem>
          <SelectItem value="ruby">Ruby</SelectItem>
          <SelectItem value="go">Go</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => setBackgroundColor(value)}>
        <SelectTrigger className="w-full mt-4 bg-slate-700 border-none">
          <SelectValue placeholder="Background Color" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bg-sky-300">
            <div className="bg-sky-300 size-"></div>
          </SelectItem>
          <SelectItem value="bg-green-300">Green</SelectItem>
          <SelectItem value="bg-yellow-300">Yellow</SelectItem>
          <SelectItem value="bg-red-300">Red</SelectItem>
          <SelectItem value="bg-purple-300">Purple</SelectItem>
          <SelectItem value="bg-gray-300">Gray</SelectItem>
          <SelectItem value="bg-pink-300">Pink</SelectItem>
          <SelectItem value="bg-orange-300">Orange</SelectItem>
          <SelectItem value="bg-blue-300">Blue</SelectItem>
          <SelectItem value="bg-lime-300">Lime</SelectItem>
        </SelectContent>
      </Select>

      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Title"
                      className="bg-slate-700 text-white border-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-white">
                    Enter a title for your code snippet (2-50 characters).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="bg-slate-700 h-fit min-h-20 text-white border-none"
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-white">
                    Enter a description (10-100 characters).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-500 h-13 w-full text-black font-normal"
            >
              Add Code
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default CodeInput;
