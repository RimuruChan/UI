/*
  Copyright (C) 2022 Suwings <Suwings@outlook.com>

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  According to the AGPL, it is forbidden to delete all copyright notices, 
  and if you modify the source code, you must open source the
  modified source code.

  版权所有 (C) 2022 Suwings <Suwings@outlook.com>

  该程序是免费软件，您可以重新分发和/或修改据 GNU Affero 通用公共许可证的条款，
  由自由软件基金会，许可证的第 3 版，或（由您选择）任何更高版本。

  根据 AGPL 与用户协议，您必须保留所有版权声明，如果修改源代码则必须开源修改后的源代码。
  可以前往 https://mcsmanager.com/ 阅读用户协议，申请闭源开发授权等。
*/

export const TYPE_UNIVERSAL = "universal"; // 通用输入输出程序
export const TYPE_WEB_SHELL = "universal/web_shell"; // WebShell 程序

export const TYPE_MINECRAFT_JAVA = "minecraft/java";
export const TYPE_MINECRAFT_BUKKIT = "minecraft/java/bukkit";
export const TYPE_MINECRAFT_SPIGOT = "minecraft/java/spigot";
export const TYPE_MINECRAFT_PAPER = "minecraft/java/paper";
export const TYPE_MINECRAFT_FORGE = "minecraft/java/forge";
export const TYPE_MINECRAFT_BUNGEECORD = "minecraft/java/bungeecord";
export const TYPE_MINECRAFT_GEYSER = "minecraft/java/geyser";
export const TYPE_MINECRAFT_SPONGE = "minecraft/java/sponge";
export const TYPE_MINECRAFT_MOHIST = "minecraft/java/mohist";

export const TYPE_MINECRAFT_BEDROCK = "minecraft/bedrock";
export const TYPE_MINECRAFT_BDS = "minecraft/bedrock/bds";
export const TYPE_MINECRAFT_NUKKIT = "minecraft/bedrock/nukkit";

// 前端可选择类型列表
const INSTANCE_TYPE_TRANSLATION = {};
INSTANCE_TYPE_TRANSLATION[TYPE_UNIVERSAL] = "控制台通用程序";
INSTANCE_TYPE_TRANSLATION[TYPE_WEB_SHELL] = "Web Shell";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_JAVA] = "MC Java 版通用";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BEDROCK] = "MC 基岩版通用";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_SPIGOT] = "MC Spigot";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_PAPER] = "MC Paper";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BUNGEECORD] = "MC BungeeCord";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BDS] = "MC Bedrock";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_SPONGE] = "MC Sponge";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_FORGE] = "MC Forge";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_BUKKIT] = "MC Bukkit";
INSTANCE_TYPE_TRANSLATION[TYPE_MINECRAFT_GEYSER] = "MC Geyser";

export { INSTANCE_TYPE_TRANSLATION };
