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
  language: z
    .string({
      required_error: "Please select a language.",
    })
    .min(1, "Please select a language"),
  backGroundColor: z
    .string({
      required_error: "Please select a color.",
    })
    .min(1, "Please select a color"),
});

function CodeInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      language: "",
      backGroundColor: "",
    },
  });

  const [code, setCode] = useState('');
  const [language, setLanguage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const program = {
      ...values,
      code,
    };
    console.log(program);
    form.reset();

    setLanguage(""); // <-- reset to default
    setBackgroundColor(""); // <-- reset to default
    setCode(''); // (optional) reset code editor
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
      <div className="flex flex-col lg:flex-row  justify-around">
        <div
          className={`${
            backgroundColor === "" ? "bg-sky-300" : backgroundColor
          } rounded-xl h-fit flex items-center justify-center p-5 mb-10 lg:w-6/11 xl:w-230 xl:ml-10`}
        >
          <Editor
            placeholder="Write your code here"
            value={code}
            onValueChange={setCode}
            highlight={(code) => highlightCode(language, code)}
            padding={10}
            className="w-full min-h-[300px] xl:min-h-114"
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              background: "black",
              color: "#fff",
              borderRadius: "12px",
              height: "fit-content",
            }}
          />
        </div>

        <div className="mt-10 lg:mt-0  lg:w-4/11 xl:w-80">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => {
                        setLanguage(value);
                        field.onChange(value);
                      }}
                      value={language}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-slate-700 border-none">
                          <SelectValue placeholder="Language" className="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-700 text-white border-none">
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
                    <FormDescription className="text-white">
                      Select a programming language
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="backGroundColor"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => {
                        setBackgroundColor(value);
                        field.onChange(value);
                      }}
                      value={backgroundColor}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full mt-4 bg-slate-700 border-none">
                          <SelectValue placeholder="Background Color" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="bg-slate-700 text-white border-none">
                        <SelectItem value="bg-sky-300">Sky Blue</SelectItem>
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
                    <FormDescription className="text-white">
                      Select a background color
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                className="bg-blue-500 h-13 w-full text-black font-normal mb-10"
              >
                Add Code
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CodeInput;
