export class CreatePostDto {
    readonly title: string;
    readonly content: string;
    readonly userId: number;
}

export class RemovePostDto {
    readonly id: number;
}