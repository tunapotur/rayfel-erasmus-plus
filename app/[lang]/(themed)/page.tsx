import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ModeToggle";

import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";
import Counter from "@/components/counter";
import LocaleSwitcher from "@/components/locale-switcher";
import LocaleSelect from "@/components/LocalSelect";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ModeToggle></ModeToggle>

        <div>
          {/* <LocaleSwitcher /> */}
          <LocaleSelect locale={lang} />

          <div>
            <p>Current locale: {lang}</p>
            <p>
              This text is rendered on the server:{" "}
              {dictionary["server-component"].welcome}
            </p>
            <Counter dictionary={dictionary.counter} />
          </div>
        </div>

        <div className="flex flex-row justify-around py-2">
          <div className="bg-sky-50 size-8 rounded"></div>
          <div className="bg-sky-100 size-8 rounded"></div>
          <div className="bg-sky-200 size-8 rounded"></div>
          <div className="bg-sky-300 size-8 rounded"></div>
          <div className="bg-sky-400 size-8 rounded"></div>
          <div className="bg-sky-500 size-8 rounded"></div>
          <div className="bg-sky-600 size-8 rounded"></div>
          <div className="bg-sky-700 size-8 rounded"></div>
          <div className="bg-sky-800 size-8 rounded"></div>
          <div className="bg-sky-900 size-8 rounded"></div>
          <div className="bg-sky-950 size-8 rounded"></div>
        </div>

        <div className="flex flex-row justify-around py-2">
          <div className="bg-sky-500/10 size-8 rounded"></div>
          <div className="bg-sky-500/20 size-8 rounded"></div>
          <div className="bg-sky-500/30 size-8 rounded"></div>
          <div className="bg-sky-500/40 size-8 rounded"></div>
          <div className="bg-sky-500/50 size-8 rounded"></div>
          <div className="bg-sky-500/60 size-8 rounded"></div>
          <div className="bg-sky-500/70 size-8 rounded"></div>
          <div className="bg-sky-500/80 size-8 rounded"></div>
          <div className="bg-sky-500/90 size-8 rounded"></div>
          <div className="bg-sky-500/100 size-8 rounded"></div>
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
