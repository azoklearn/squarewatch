"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RevealLines from "./motion/RevealLines";

type FormState = {
  name: string;
  email: string;
  watch: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  watch: "",
  message: ""
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ivory py-28 md:py-40"
    >
      <div className="ambient-radial pointer-events-none absolute inset-0" />

      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="eyebrow mb-8 text-ink/55">VII — Correspondence</div>
            <RevealLines
              as="h2"
              className="serif font-light leading-[0.98] text-ink"
            >
              {[
                <span
                  key="l1"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  Write to us.
                </span>,
                <span
                  key="l2"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                  className="italic text-bordeaux"
                >
                  Quietly.
                </span>
              ]}
            </RevealLines>
            <p className="mt-10 max-w-md text-[14.5px] leading-[1.85] text-ink/70">
              All enquiries are read by Élise. Replies are personal — please
              allow up to two working days. For pieces of particular
              sensitivity, a private consultation may be arranged in Geneva,
              Paris or London.
            </p>

            <div className="mt-16 space-y-6">
              <div className="border-t border-ink/15 pt-4">
                <div className="eyebrow text-ink/45">Geneva</div>
                <div className="serif mt-1 text-lg font-light text-ink">
                  Rue du Rhône 47 · 1204
                </div>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <div className="eyebrow text-ink/45">Correspondence</div>
                <div className="serif mt-1 text-lg font-light text-ink">
                  bureau@watchsquare.ch
                </div>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <div className="eyebrow text-ink/45">Hours</div>
                <div className="serif mt-1 text-lg font-light text-ink">
                  By appointment only
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-16 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="border border-ink/15 bg-ivory-50 p-12"
              >
                <div className="numeral text-3xl italic text-bordeaux">
                  Thank you.
                </div>
                <p className="serif mt-6 text-2xl font-light leading-snug text-ink">
                  Your message has been received.
                </p>
                <p className="mt-6 text-[14px] leading-[1.85] text-ink/65">
                  We will respond personally within two working days.
                  Correspondence remains confidential.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-x-8 gap-y-10"
              >
                <Field
                  label="Name"
                  type="text"
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  required
                  full
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  required
                />
                <Field
                  label="Desired watch"
                  type="text"
                  placeholder="Reference, year, configuration"
                  value={form.watch}
                  onChange={(v) => update("watch", v)}
                />
                <div className="col-span-2">
                  <label className="field-line block pt-2">
                    <span className="eyebrow block text-ink/55">Message</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={5}
                      placeholder="Tell us what you are looking for, or what brings you here."
                      className="serif mt-3 w-full resize-none border-0 bg-transparent pb-4 text-lg font-light text-ink placeholder:text-ink/30 focus:ring-0"
                    />
                  </label>
                </div>
                <div className="col-span-2 flex flex-col items-start justify-between gap-6 pt-6 md:flex-row md:items-center">
                  <p className="max-w-xs text-[11px] leading-[1.7] text-ink/45">
                    By submitting, you agree to be contacted in confidence.
                    Watch Square does not share enquiries.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-bordeaux px-10 py-5 text-[12.5px] font-medium tracking-wider text-ivory transition-colors duration-500 hover:bg-bordeaux-700"
                  >
                    <span>Request a Consultation</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    >
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  full
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`field-line block pt-2 ${full ? "col-span-2" : "col-span-2 md:col-span-1"}`}>
      <span className="eyebrow block text-ink/55">
        {label}
        {required && <span className="ml-1 text-bordeaux">·</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="serif mt-3 w-full border-0 bg-transparent pb-4 text-lg font-light text-ink placeholder:text-ink/30 focus:ring-0"
      />
    </label>
  );
}
