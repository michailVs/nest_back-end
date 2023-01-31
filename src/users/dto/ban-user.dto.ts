export class BanUserDto {
    readonly userId: number;
    readonly banReason: string;
}

export class UnBanUserDto {
    readonly userId: number;
}