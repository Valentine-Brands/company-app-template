import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { FormEvent } from "react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("can be reached and activated with the keyboard", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Try again</Button>);

    await user.tab();
    expect(screen.getByRole("button", { name: "Try again" })).toHaveFocus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("does not activate a disabled button", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Saving
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Saving" });
    await user.click(button);
    await user.tab();
    await user.keyboard("{Enter}");

    expect(button).toBeDisabled();
    expect(button).not.toHaveFocus();
    expect(onClick).not.toHaveBeenCalled();
  });

  it("does not submit a form unless explicitly configured to submit", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((event: FormEvent<HTMLFormElement>) =>
      event.preventDefault(),
    );
    render(
      <form onSubmit={onSubmit}>
        <Button>Cancel</Button>
        <Button
          type="submit"
          name="intent"
          value="save"
          className="custom-button"
        >
          Save
        </Button>
      </form>,
    );

    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(onSubmit).not.toHaveBeenCalled();

    const submitButton = screen.getByRole("button", { name: "Save" });
    expect(submitButton).toHaveAttribute("name", "intent");
    expect(submitButton).toHaveAttribute("value", "save");
    expect(submitButton).toHaveClass("custom-button");
    await user.click(submitButton);

    expect(onSubmit).toHaveBeenCalledOnce();
  });
});
